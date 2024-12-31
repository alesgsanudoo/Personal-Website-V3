import NotFoundLayout from "./NotFoundLayout";
import {routing} from "@/i18n/routing";
import {NotFoundPage} from "@/components/NotFoundPage";

export default function NotFound() {
    return (
        <NotFoundLayout locale={routing.defaultLocale}>
            <NotFoundPage/>
        </NotFoundLayout>
    );
}