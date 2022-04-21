

function Homepage() {
  return (
    <div  className="header flex flex-row items-center justify-between my-10">

            <div className="slogan flex flex-col w-1/2 items-start justify-center ">
                <div className={`flex flex-col items-start justify-center animate-fade-in-right `}>
                    <h1 className="py-2 text-6xl font-bold">Let's shop</h1>
                    <p className="text-xl mt-5">Let's Shop adalah tempat berbelanja yang lengkap, tanpa ribet, dan gratis ongkir setiap hari.</p>
                </div>


            </div>

            <img className={`transition  animate-fade-in-left`} src="/shopvector.png" width="512" height="512" alt="preview" />
        </div>
  );
}

export default Homepage;