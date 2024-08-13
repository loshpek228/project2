import React from "react";
import "./page1.css";






const Page1 = () => {
    return (
        <div className="page1">
            <div className="background-container">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/4b16/cfff/aaacd5fcb853d556e12a45b0f923a1f6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5HeMiG2Em2hSXU2L81l2gMblS9lTjHB0Wm8OuhIwUJfzl6n9KcxYsTBFqmDt6rFnu0uMCol51M1symu0eQkoXa99Jqp74O9MMFgT1FpQGLNgwqTWp85FHHGVelV6ZXus14gAcWgLiPVsy7AeLSWnjHnwK92wiyBJFzk940xZNKEbgPJsz9k1klZgbnnbO3DMnTdzk2rpvxjKMsueTfEg5~2VaLZy5qQPoj18MtNq1mupl7PzAuDD3r6bwXln-qnGWJv~UmYqaY~ZVj3IKNkd6JqLmPM5bQ1fa58fWcitg1FI0SipiT33b6kX0ST7uWlK~mGr6MkXwXgOsGjO17PUw__" 
                    alt="krutoichel" 
                    className="background-image" 
                />
                <div className="text-box">
                    <div className="porten-text">PORTEN</div>
                    <div className="divider"></div>
                    <div className="subtext">Санкт-Петербург</div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                </div>
            </div>
            <div className="cards-wrapper">
                <div className="season-header">СЕЗОН 2020/21</div>
                <div className="image-container">
                    <div className="product-card">
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                            alt="Louis XVI ATHOS"
                            className="product-image"
                        />
                        <div className="product-info">
                            <div className="product-title">Louis XVI ATHOS</div>
                            <div className="product-price">165 000 руб.</div>
                        </div>
                    </div>
                    <div className="product-card">
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                            alt="Louis XVI ATHOS"
                            className="product-image"
                        />
                        <div className="product-info">
                            <div className="product-title">Louis XVI ATHOS</div>
                            <div className="product-price">165 000 руб.</div>
                        </div>
                    </div> <div className="product-card">
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                            alt="Louis XVI ATHOS"
                            className="product-image"
                        />
                        <div className="product-info">
                            <div className="product-title">Louis XVI ATHOS</div>
                            <div className="product-price">165 000 руб.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-image-container">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/a213/481a/13ae375788f6b0be7f5a349d5f5d2a2b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiQJwY7BUNh7WKbDWON5ozBlghPpWlAPcNiElewO1zCMlVx511hPBYpnmVbRrRNKmMiGZE667R--P28MSS51ZBY5~5iqfe6ed~7CF-1PFmgUY1e0FwfkQh0AYfgnJD0Kgo~egb6WGz7R8~AdLVXhtqRtY79Z10bdJFXS-7TxxKb3EF87v2FVyNTVpwWH78V2rQrwPsmprYILjzh-6Nr8Qpfo1S7kxVY9UNJdFSS2OXcSItxeIiHLYkIZOVDDV4mRHiC73EQGyFOLf~FRkiIuTJ54hYpCgeYcvVJlR6q231Sd0jEPOmuA5rvh0IZ1s0Lbu3rcN2G2McqonTvuJ0-40w__"
                    alt="Right Image"
                    className="right-image"
                />
            </div>

            <div className="gentelnigga-container">
    <img 
        src="https://s3-alpha-sig.figma.com/img/a5b1/bc2e/30ba8c8c5a993f0f64cb516e538d538b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vq9XRmVBZhsPer9VxRlIvkVdz8N6WI0jG3hhcAUhpOV1eroowxaivAtDaD96Qc3VVvJiANYgeLqojZGV3hCtnq~0vGjFp~UXn9NPjSVXKJkuPFKVA06DTr92Lx~NZQ6stvtNgByV3aHGpm29vOakPGPbGkZTbmL7to~ObHjBVPiQ~OHKGnpQqa44ijLli0rod5prSA0EziV4PuSWCJGQejhsi-c3B93c2jKi9TXfk8NdOxaZOE9f4Xezm5FHbwnsro0WmYc8cNb40RGgernmbLwBzfKZ72x67k2Ur-KsSOKJ-am8ROi2HWoTAPpykzkcbd8vyVACzJ1GruhKs0LH9w__" 
        alt="gentelnigga" 
        className="gentelnigga-image" 
    />
</div>



            <div className="collection">
                <div className="collection-text">
                    <div className="collection-title">Коллекция 2018</div>
                    <div className="collection-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.
                    </div>
                </div>
                <button  className="center-button">посмотреть коллекцию</button>
            </div>

           

            <div className="new-image">
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div><div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
                <div className="new-image-item">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbEj2BIF8H9zBfs9nY6G9Nmo7SopyIT1b~ZOyKL7vjOyRyHd7Cb-orjpi8oy8CvLmn9DDI9nB4VjEZkTwgAePyGY8gToZzKfqSHj1yPiZKoGJGac9FVkMPZKcxiyMXccP8ENUxScYRqMpiP75wBbxEnJ-IjKHhayQtpSI5W8KerO33T5tZmHeqTW06coi5LDIF-GMpEZSZbJHazA2Uy57CILhQ4yr4yfuTFTbjQL9eRH3Ef4HoLqUoCblL~viKzKTtRjlab7uOLaVav1mKZGPcQ~VvDjaYolsrDRPlN9O7xN8dSZQ1nsMXe4eegE2~xachWz9IYcexrn5tqrAqV5tg__"
                        alt="Louis XVI ATHOS"
                        className="new-image-img"
                    />
                    <div className="new-image-info">
                        <div className="new-image-title">Louis XVI ATHOS</div>
                        <div className="new-image-price">165 000 руб.</div>
                    </div>
                </div>
            </div>

            <div class="photo-brand-container">

            <div className="text-brand">
                НАШИ БРЕНДЫ
            </div>

    <div class="photo-brand-item"> <img src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtLZu97Iv2eYEEl~1EHBzkIX8T~LP2HRg3JQ9VRcI7kFqjtCoOAxJBa~GzRF-VbuJR~YrsU1IeF~ES5OIny3wbERrLPcMIib4s-ULZQAJXfbjaRp43x2mXs172RJH4bclwb3Np8uLOXlfyi8xEYt6kZhMUtPI631Ccdk4fG1uTcYekof0XBX19TbdvjdtodkX3lD17Tnq5UjhlSq~rxmZVkVFhtfR0lYzoiWMVlJeHuRlvpgczFAAYcDXVR6abAI1LwCbPYNV7LMQPw3UbfUzt6vwVtY2JyhM2qxSS9HjqjZijQAZBqpoD1ADEmhArKA0oKPD-L3YCNLBzd1NGqkig__"/> alt="Photo 1"></div>
    <div class="photo-brand-item"> <img src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtLZu97Iv2eYEEl~1EHBzkIX8T~LP2HRg3JQ9VRcI7kFqjtCoOAxJBa~GzRF-VbuJR~YrsU1IeF~ES5OIny3wbERrLPcMIib4s-ULZQAJXfbjaRp43x2mXs172RJH4bclwb3Np8uLOXlfyi8xEYt6kZhMUtPI631Ccdk4fG1uTcYekof0XBX19TbdvjdtodkX3lD17Tnq5UjhlSq~rxmZVkVFhtfR0lYzoiWMVlJeHuRlvpgczFAAYcDXVR6abAI1LwCbPYNV7LMQPw3UbfUzt6vwVtY2JyhM2qxSS9HjqjZijQAZBqpoD1ADEmhArKA0oKPD-L3YCNLBzd1NGqkig__"/> alt="Photo 2"></div>
    <div class="photo-brand-item"> <img src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtLZu97Iv2eYEEl~1EHBzkIX8T~LP2HRg3JQ9VRcI7kFqjtCoOAxJBa~GzRF-VbuJR~YrsU1IeF~ES5OIny3wbERrLPcMIib4s-ULZQAJXfbjaRp43x2mXs172RJH4bclwb3Np8uLOXlfyi8xEYt6kZhMUtPI631Ccdk4fG1uTcYekof0XBX19TbdvjdtodkX3lD17Tnq5UjhlSq~rxmZVkVFhtfR0lYzoiWMVlJeHuRlvpgczFAAYcDXVR6abAI1LwCbPYNV7LMQPw3UbfUzt6vwVtY2JyhM2qxSS9HjqjZijQAZBqpoD1ADEmhArKA0oKPD-L3YCNLBzd1NGqkig__"/> alt="Photo 3"></div>
    <div class="photo-brand-item"> <img src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtLZu97Iv2eYEEl~1EHBzkIX8T~LP2HRg3JQ9VRcI7kFqjtCoOAxJBa~GzRF-VbuJR~YrsU1IeF~ES5OIny3wbERrLPcMIib4s-ULZQAJXfbjaRp43x2mXs172RJH4bclwb3Np8uLOXlfyi8xEYt6kZhMUtPI631Ccdk4fG1uTcYekof0XBX19TbdvjdtodkX3lD17Tnq5UjhlSq~rxmZVkVFhtfR0lYzoiWMVlJeHuRlvpgczFAAYcDXVR6abAI1LwCbPYNV7LMQPw3UbfUzt6vwVtY2JyhM2qxSS9HjqjZijQAZBqpoD1ADEmhArKA0oKPD-L3YCNLBzd1NGqkig__"/> alt="Photo 4"></div>
</div>


<div className="photo1">
    <img src="https://s3-alpha-sig.figma.com/img/7248/7990/1bcdf16cb80ba5349612b2e3e9ddd2ff?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vbas7luvVfPpNUCWE7Psxf9TIQpagqTwjVfKXJuZ9JuTh~75IZ9M3sWbfAg85XoS-GE1mZexrMo7HV0n2jq0Vrp~okQV51QkBx5QiVA30eo40Zs7SUNIihJLat2notQX4fv0wwXxzHsUtbuHGAymVeiyNIxq2fkUWO4ZaInlISF4~~N3RP8NQB6e3~KlVRb2v4Kk2oFWxFCaYpfew2cRMkjlTpBbhnbzpQWe8o1w-Jfwe~YDggmkukAy0wO9enCbKksZImnCIEmoRLyAcbAC6mfEeElIO5oe1deyydHmZTnudOKnsrWCE9BxWbjlulrslurYitg4X7KSKl6mU15jMQ__" alt="photo123" />

    <div className="text-overlay">
        <h1>О магазине</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
    </div>

    <div className="center-text">
        <h2>Категории</h2>
        <div className="categories">
            <div className="row">
                <div className="category-item">часы</div>
                <div className="category-item">браслеты</div>
                <div className="category-item">ремни</div>
            </div>
            <div className="row">
                <div className="category-item">ювелирные изделия</div>
                <div className="category-item">запонки</div>
            </div>
        </div>
    </div>

    <div className="newsletter">
        <h2>Рассылка</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
    </div>
</div>










        </div>
    );
};

export default Page1;