import { DocumentTextIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import FluentEmoji from "./fluent-emoji";

export const Hero = () => {
  return (
    <section className="relative col-span-full mb-4 mx-auto w-full max-w-7xl items-center px-5 pt-12 pb-6 md:px-12 lg:px-16">
      <div className="mx-auto flex w-full text-left">
        <div className="relative mx-auto inline-flex items-center align-middle">
          <div className="text-center">
            <h1
              className="max-w-8xl text-4xl font-extrabold leading-none tracking-tighter 
            text-slate-800 dark:text-slate-50 md:text-5xl lg:max-w-7xl lg:text-6xl"
            >
              <span
                className="relative animate-move-bg bg-gradient-to-r from-indigo-500 
              via-pink-500 to-indigo-500 bg-[length:400%] bg-clip-text
               text-transparent"
              >
                Animated{" "}
              </span>
              TeleEmojis
            </h1>
            <p className="mx-auto  max-w-xl text-base leading-relaxed text-slate-500 sm:mt-8">
              All the Telegram animated emojis are available in one place and
              ready to use in your next project or README file.
            </p>
            <Alert className="my-4">
              <span className="h-4 w-4">🇵🇸 </span>
              <AlertTitle>Free Palestine: A Call for Justice!</AlertTitle>
              <AlertDescription>
                Demanding Palestine&apos;s Freedom & Global Support
              </AlertDescription>
            </Alert>
            <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-2 sm:flex-row">
              <div className="mt-3 rounded-lg sm:mt-0">
                <a
                  href="https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis"
                  className="btn"
                >
                  <DocumentTextIcon className="mr-1.5 h-5 w-5" /> Documentation
                </a>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <a
                  href="https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis"
                  className="btn-secondary"
                >
                  <PhotoIcon className="mr-1.5 h-5 w-5" />
                  Source files
                </a>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <a
                  href="https://animated-fluent-emoji.vercel.app/"
                  className="btn-secondary"
                >
                  <FluentEmoji />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
