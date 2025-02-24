import DefaultLayout from "@/layouts/default";
import osuBanner from "../../public/osu banner.jpeg";
import profileIcon from "../../public/profile-icon.jpeg";
import flagIcon from "../../public/sg flag.svg";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="max-w-5xl mx-auto relative">
        <img src={osuBanner} alt="OSU Banner" className="w-full rounded-t-lg" />
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16 relative">
          <div className="absolute top-0 left-8 transform -translate-y-1/3 flex items-center">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-32 h-32 rounded-3xl"
            />
            <div className="ml-4 mt-8 text-left">
              <p className="text-3xl font-bold">Ryan Lim</p>
              <div className="flex items-center">
                <p className="text-xl text-black">Singapore</p>
                <img
                  src={flagIcon}
                  alt="Singapore Flag"
                  className="w-6 h-6 ml-2 mt-1" // Adjust size with w-6/h-6 and spacing with ml-2
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
