import { Icon } from "@/components/icons/Icon";

const providers = [
  { name: "Facebook", icon: "facebook" },
  { name: "Google", icon: "google" },
] as const;

/** "or" divider followed by the social sign-in buttons. */
export function SocialSignIn({ action }: { action: "Sign in" | "Sign up" }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px]" role="separator" aria-label="or">
        <span className="h-px flex-1 bg-black-200 sm:w-[200px] sm:flex-none" />
        <span aria-hidden className="type-body-l text-black-400">
          or
        </span>
        <span className="h-px flex-1 bg-black-200 sm:w-[200px] sm:flex-none" />
      </div>
      <div className="flex gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={`${action} with ${provider.name}`}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-black-200 text-black transition-colors duration-200 hover:border-persian-blue-800 hover:bg-shuttle-gray-50"
          >
            <Icon name={provider.icon} size={40} />
          </button>
        ))}
      </div>
    </div>
  );
}
