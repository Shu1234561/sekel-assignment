import { RootLayoutHocProps } from "../Common/interface";
import RootLayout from "../Layout/RootLayout";

const withRootLayout = ({ component: WrappedComponent }: RootLayoutHocProps) => {
    return function WrappedWithRootLayout(props: any){
        return (
            <RootLayout>
                {WrappedComponent && <WrappedComponent {...props} />}
            </RootLayout>
        )
    }
}

export default withRootLayout;