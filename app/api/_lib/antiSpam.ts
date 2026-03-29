const SUBMISSION_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const MIN_SECONDS_BETWEEN_SUBMISSIONS = 10;

type SubmissionState = {
  timestamps: number[];
};

const submissionStore = new Map<string, SubmissionState>();

const toText = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  const realIp = request.headers.get("x-real-ip") || "";
  const candidate = forwarded.split(",")[0]?.trim() || realIp.trim();
  return candidate || "unknown";
};

export const validateConsentAndSpam = (
  request: Request,
  formData: FormData,
  scope: string
) => {
  const consent = toText(formData.get("privacyConsent")).toLowerCase();
  const website = toText(formData.get("website"));

  if (website) {
    return "Spam detection triggered.";
  }

  if (!["on", "true", "yes", "1"].includes(consent)) {
    return "You must agree to the privacy consent before sending.";
  }

  const now = Date.now();
  const ip = getClientIp(request);
  const key = `${scope}:${ip}`;
  const existing = submissionStore.get(key) || { timestamps: [] };
  const recent = existing.timestamps.filter(
    (timestamp) => now - timestamp <= SUBMISSION_WINDOW_MS
  );

  const lastTimestamp = recent[recent.length - 1];
  if (lastTimestamp && now - lastTimestamp < MIN_SECONDS_BETWEEN_SUBMISSIONS * 1000) {
    return "Please wait a few seconds before sending another message.";
  }

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return "Too many requests. Please try again later.";
  }

  recent.push(now);
  submissionStore.set(key, { timestamps: recent });
  return "";
};
