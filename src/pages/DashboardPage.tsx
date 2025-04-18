import { UserAuth } from '@/components/auth/AuthContext'
import DashboardLayout from '@/components/layouts/DashboardLayout';
import EmptyComp from '@/components/emptyComp';

const DashboardPage = () => {


    const { session } = UserAuth();


    

    return (

        <DashboardLayout>
            <EmptyComp/>
        </DashboardLayout>

    )
}

export default DashboardPage;
