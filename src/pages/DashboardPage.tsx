import { UserAuth } from '@/components/AuthContext'
import DashboardLayout from '@/components/DashboardLayout';
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
