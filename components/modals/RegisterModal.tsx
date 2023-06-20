import React, { useCallback, useState } from "react";
import useLoginModal from "@/Hooks/useLoginModal";
import useRegisterModal from "@/Hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        name,
        username,
      });

      toast.success("Votre compte a bien été créé");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, name, username]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Nom d'utilisateur"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Vous avez déjà un compte ?
        <span
          onClick={onToggle}
          className="cursor-pointer hover:underline text-white"
        >
          {" "}
          Connexion
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Créer un compte"
      actionLabel="Inscription"
      onSubmit={onSubmit}
      body={bodyContent}
      onClose={registerModal.onClose}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
