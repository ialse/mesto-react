function Main() {
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar"></button>
                <div className="profile__profile-info">
                    <h1 className="profile__title">Алексей</h1>
                    <button type="button" className="profile__button-edit"></button>
                    <p className="profile__subtitle">Исследователь закатов</p>
                </div>
                <button type="button" className="profile__button-add"></button>
            </section>

            <section className="elements"></section>
        </main>
    );
}

export default Main;