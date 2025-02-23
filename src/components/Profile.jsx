const Profile = () => {
  return (
    <>
      <hr className="my-12 text-eleventh-color" />
      <section className="flex flex-col profile">
        <p className="text-5xl text-ninth-color font-semibold">Profile</p>
        <div className="flex box">
          <div className="profile-box mr-28">
            <p className="text-3xl text-eighth-color font-medium mt-10 mb-6">
              Profile
            </p>
            <ul className="list-none p-0 m-0 text-gray-600 space-y-2">
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">İkamet Şehri:</strong>
                <span>Çekmeköy, İstanbul</span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">Eğitim Durumu:</strong>
                <span className="break-word w-[26rem]">
                  Marmara Üniversitesi - Bilgisayar Programcılığı Ön Lisans,
                  2015 <br />
                  Marmara Üniversitesi - Bilgi ve Belge Yönetimi Lisans, 2024
                </span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-40">Tercih Ettiği Rol:</strong>
                <span>Frontend, UI, Backend</span>
              </li>
              <li className="flex text-lg text-tenth-color font-normal">
                <strong className="w-[21rem]">Deneyim:</strong>
                <span>
                  Marmara Üniversitesi - Bilgi İşlem Daire Başkanlığı,
                  Full-Stack Developer (Part-Time) Çalışma Süresi: 2 Yıl
                </span>
              </li>
            </ul>
          </div>
          <div className="about-box">
            <p className="text-3xl text-eighth-color font-medium mt-10 mb-6">
              About Me
            </p>
            <p className="text-lg text-tertiary-color">
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
