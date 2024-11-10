import Name from "./components/Name"


export default function Home() {
  return (
<div>

<Name />
<div className="title-h">
  <br />
Building Tomorrow's <br />Technology Today!
        
     <br />
       <button className="bg-purple-900 border rounded hover:bg-white hover:text-purple-950 mt-10 p-2">
        <a href="https://milestone1-personal-static-resume.vercel.app/" target="blank"> Resume</a>
        <i className='bx bxs-right-top-arrow-circle'></i></button>

</div>
</div>
  )
}