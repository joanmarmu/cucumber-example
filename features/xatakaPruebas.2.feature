Feature: Xataka web Testing (Examples)

    @GoSubWeb
    Scenario Outline: Go to Sub Website
        Given I am on Xataka website
        When I click on Xataka SubWeb with href <url>
        And the website title must be <name>

        Examples:
            | url                                                                              | name                                                                    |
            | "//www.vidaextra.com?utm_source=xataka&utm_medium=network&utm_campaign=favicons" | "Vida Extra - Consolas y videojuegos: Playstation, XBox, Nintendo, PC"  |
            | "//www.vitonica.com?utm_source=xataka&utm_medium=network&utm_campaign=favicons"  | "Vitónica - Deporte y actividad física, fitness, nutrición y vida sana" |
