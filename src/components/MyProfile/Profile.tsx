export default function Profile() {
    const user = {
        firstName : 'Андрей',
        lastName : 'Копейкин',
        imageUrl : './src/components/MyProfile/img/sinie-glaza-leoparda.jpg'
    }
    return (
        <>
        <div>
            <p>Имя: {user.firstName}</p>
            <p>Первая буква фамилии: {user.lastName[0]}</p>
            <img 
              className = 'leopard'
              src = {user.imageUrl}
            />
        </div>
        </>
    )
}