import './AdminLinks.css'

function AdminLinks({icon, text}) {
  return (
    <div className="adminLinks">
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default AdminLinks