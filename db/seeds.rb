# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(name: "Bobby Brown", pic_url: "https://img.freepik.com/free-vector/cute-animal-doing-dabbing_23-2147847948.jpg?size=338&ext=jpg")

User.create(name: "Charlie", pic_url: "https://i.pinimg.com/originals/5f/31/3d/5f313d0b5de732357b911012185d110b.png")

User.create(name: "Lady Gaga", pic_url: "https://img.freepik.com/free-vector/cute-hamster-cartoon-hand-drawn-style_42349-104.jpg?size=338c&ext=jpg")

User.create(name: "Chaos", pic_url: "https://cuethat.com/wp-content/uploads/2017/12/cute-animal-cartoon-pictures.jpg")
