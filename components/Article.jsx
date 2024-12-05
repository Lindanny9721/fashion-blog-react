function Article() {
    const articles = [
        {
            date: "2020-12-20",
            title: "On the Street in Brooklyn",
            image: "../src/assets/blog-image-2.jpg",
            alt: "three-people-staring",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis."
        },
        {
            date: "2020-11-20",
            title: "Vintage in Vogue",
            image: "../src/assets/blog-image-1.jpg",
            alt: "girl-walking",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia numquam laudantium eos quasi corporis maxime? Molestias ullam earum aperiam libero beatae adipisci cum quasi sed. Ipsam necessitatibus itaque tempore omnis."
        },
    ];
    return (
        <div>
            {articles.map((article, index) => (
            <section key={index}>
                <article>
                <time dateTime={article.date}>{article.date}</time>
                <h2 className="article-title">{article.title}</h2>
                <img src={article.image} alt={article.alt} />
                <p className="article-text">{article.text}</p>
                <aside>
                    <a className="continue" href="#">Continues ...</a>
                </aside>
                </article>
                <hr></hr>
            </section>
            ))}
        </div>
    );
}
export default Article;