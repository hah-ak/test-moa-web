import React, {useState} from 'react';
import SignInComponent from "@/components/sign/in/sign-in-component";
import SignUpFormComponent from "@/components/sign/up/sign-up-form-component";
import DefaultModal from "@/components/modal/default-modal";

const SignInUpModalComponent = ({open,setOpen}:{open:boolean;setOpen:(open:boolean)=>void}) => {
    const [tab, setTab] = useState<"signIn"|"singUp">("signIn")
    const onClose = () => {
        setOpen(false)
        setTab("signIn")
    }
    return (
        <DefaultModal open={open} onClose={onClose}>
            {tab === "signIn"
                ? <SignInComponent onClickSignUp={()=>setTab("singUp")} onClose={onClose}/>
                : <SignUpFormComponent onClose={onClose}/>
            }
        </DefaultModal>
    );
};

export default SignInUpModalComponent;