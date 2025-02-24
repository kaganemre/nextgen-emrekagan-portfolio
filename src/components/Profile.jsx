import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Profile = () => {
  const { profile } = useContext(PortfolioContext);
  return (
    <>
      <hr className="my-12 text-eleventh-color" />
      <section className="flex flex-col profile">
        <p className="text-5xl text-ninth-color font-semibold">
          {profile.title}
        </p>
        <div className="flex box">
          <div className="profile-box mr-28">
            <p className="text-3xl text-eighth-color font-medium mt-10 mb-6">
              {profile.title}
            </p>
            <ul className="list-none p-0 m-0 text-gray-600 space-y-2">
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">{profile.cityLabel}:</strong>
                <span>{profile.city}</span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">{profile.educationLabel}:</strong>
                <span className="break-word w-[26rem]">
                  {profile.educationOne} <br />
                  {profile.educationTwo}
                </span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">{profile.preferredRoleLabel}:</strong>
                <span>{profile.preferredRole.join(", ")}</span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-[21.5rem]">
                  {profile.experienceLabel}:
                </strong>
                <span>{profile.experience}</span>
              </li>
            </ul>
          </div>
          <div className="about-box">
            <p className="text-3xl text-eighth-color font-medium mt-10 mb-6">
              {profile.aboutMe}
            </p>
            <p className="text-lg text-tertiary-color text-justify">
              {profile.about}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
