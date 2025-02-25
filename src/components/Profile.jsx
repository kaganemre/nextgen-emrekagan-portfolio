import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Profile = () => {
  const { profile } = useContext(PortfolioContext);
  return (
    <>
      <hr className="my-12 mx-23 text-eleventh-color dark:border-dark-primary-color" />
      <section className="flex flex-col profile">
        <p className="flex text-5xl justify-center md:block text-ninth-color dark:text-dark-twelfth-color font-semibold">
          {profile.title}
        </p>
        <div className="flex flex-col md:flex-row box">
          <div className="profile-box mr-28">
            <p className="text-3xl md:text-start text-eighth-color dark:text-dark-seventh-color font-medium mt-10 mb-6">
              {profile.title}
            </p>
            <ul className="list-none text-base md:text-lg text-tenth-color dark:text-dark-sixth-color p-0 m-0 text-gray-600 space-y-2">
              <li className="flex font-normal">
                <strong className="w-36 md:w-40">{profile.cityLabel}:</strong>
                <span>{profile.city}</span>
              </li>
              <li className="flex font-normal">
                <strong className="w-40">{profile.educationLabel}:</strong>
                <span className="break-word w-[13rem] md:w-[26rem]">
                  {profile.educationOne} <br />
                  {profile.educationTwo}
                </span>
              </li>
              <li className="flex font-normal">
                <strong className="w-36 md:w-40">
                  {profile.preferredRoleLabel}:
                </strong>
                <span>{profile.preferredRole.join(", ")}</span>
              </li>
              <li className="flex font-normal">
                <strong className="w-[15.5rem] md:w-[21.2rem]">
                  {profile.experienceLabel}:
                </strong>
                <span className="w-80 md:w-auto">{profile.experience}</span>
              </li>
            </ul>
          </div>
          <div className="about-box mt-10 md:mt-auto">
            <p className="text-3xl text-eighth-color dark:text-dark-seventh-color font-medium mt-10 mb-6">
              {profile.aboutMe}
            </p>
            <p className="text-lg text-tertiary-color dark:text-dark-sixth-color text-justify">
              {profile.about}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
