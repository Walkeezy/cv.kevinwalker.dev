export default function CVItem(data) {
  const { id, title, items } = data.data
  console.log(title)

  return (
    <div className="cv-item">
      <h2>{title}</h2>
      <ul className="cv-item__list">
        {items.map((item) => {
          return (
            <li key={item.heading}>
              <p className="cv-item__heading">{item.heading}</p>
              {item.meta && <p className="cv-item__meta">{item.meta}</p>}
              {item.desc && <p className="cv-item__desc">{item.desc}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
