import Layout from "../../components/layout/Layout";
import SendMessageForm from "../../components/form/SendMessageForm";

/**
 * SendMessagePage Component
 */
function SendMessagePage() {
    
    return (
        <Layout>
            <SendMessageForm
                sendMessage={(
                    text: string,
                    receiver: string,
                    tokenInEther: string
                ) => {}}
            />
        </Layout>
    );
}

export default SendMessagePage;