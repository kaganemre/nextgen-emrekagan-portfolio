const Profile = () => {
  return (
    <>
      <hr className="my-12" />
      <section className="flex flex-col profile">
        <p className="text-5xl">Profile</p>
        <div className="flex box">
          <div className="profile-box mr-28">
            <p className="text-3xl mt-10 mb-6">Profile</p>
            <ul className="list-none p-0 m-0 text-gray-600 space-y-2">
              <li className="flex">
                <strong className="w-40">Doğum tarihi:</strong>
                <span>24.03.1996</span>
              </li>
              <li className="flex">
                <strong className="w-40">İkamet Şehri:</strong>
                <span>Ankara</span>
              </li>
              <li className="flex">
                <strong className="w-40">Eğitim Durumu:</strong>
                <span className="break-word w-44">
                  Hacettepe Üniversitesi Biyoloji Lisans, 2016
                </span>
              </li>
              <li className="flex">
                <strong className="w-40">Tercih Ettiği Rol:</strong>
                <span>Frontend, UI</span>
              </li>
            </ul>
          </div>
          <div className="about-box">
            <p className="text-3xl mt-10 mb-6">About Me</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. <br></br>
              <br></br>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
