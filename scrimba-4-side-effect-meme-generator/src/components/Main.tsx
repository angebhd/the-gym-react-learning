import { useEffect, useState, type ChangeEvent } from "react"

export default function Main() {


    type MemeInfo = {
        topText: string;
        bottomText: string;
        imageUrl: string;
    }

    type MemeImages = {
        "id": number,
        "name": string,
        "url": string,
        "width": number,
        "height": number,
        "box_count": number
    }

    const [memeInfo, setMemeInfo] = useState<MemeInfo>({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "https://i.imgflip.com/1bij.jpg",
    });

    const [memesImages, setMemesImages] = useState<MemeImages[]>([]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMemeInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const changeImage = () => {
        const index = Math.floor(Math.random() * memesImages.length);
        if (memesImages.length > 0)
            setMemeInfo((prev) => ({
                ...prev,
                imageUrl: memesImages[index].url
            }))
    }
    useEffect(
        () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMemesImages(data.data.memes))
                .catch(err => console.log(err))
        },
        []
    )
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeInfo.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeInfo.bottomText}
                    />
                </label>
                <button onClick={changeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.imageUrl} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}