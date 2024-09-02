import { useState } from "react";
import "./form.css";

const Form = () => {
    // Estado inicial do formulário
    const initialForm = {
        nome: "",
        email: "",
        idade: "",
    };

    // Estado do formulário
    const [formState, setFormState] = useState(initialForm);

    // Função para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
        // Obter o elemento de entrada atual
        const target = event.currentTarget;
        // Extrair o valor e o nome do campo de entrada
        const { value, name } = target;

        // Atualizar o estado do formulário com os novos valores
        setFormState({ ...formState, [name]: value });
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar idade
        const idade = parseInt(formState.idade);
        if (idade < 16) {
            alert("Somente pessoas acima de 16 anos podem se cadastrar");
            return; // Impede o envio do formulário



        }


        // Verificar e-mail
        if (!formState.email.includes('@')) {
            alert("Por favor, insira um e-mail válido com '@'.");
            return;
        }


        console.log(formState.nome)
        console.log(formState.email)
        console.log(formState.idade)

        setFormState({ ...initialForm })
    }

    return (




        <div className="container">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            value={formState.nome}
                            onChange={handleInput}


                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={formState.email}
                            onChange={handleInput}


                        />

                        <label htmlFor="idade">Idade</label>
                        <input
                            type="text"
                            name="idade"
                            id="idade"
                            value={formState.idade}
                            onChange={handleInput}


                        />


                    </div>

                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;