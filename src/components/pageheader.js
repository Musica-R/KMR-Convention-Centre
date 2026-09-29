export default function PageHeader({ title, text, image }) {
  return (
    <section className="ph">
      <img src={image} alt="" />
      <div className="ph__shade" />
      <div className="ph__body">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
