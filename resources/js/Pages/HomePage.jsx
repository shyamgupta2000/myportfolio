import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import HomeSection from '@/Components/HomeSection';
import SkillSection from '@/Components/SkillsSection';
import ExperienceSection from '@/Components/ExperienceSection';
import EducationSection from '@/Components/EducationSection';
import ContactSection from '@/Components/ContactSection';

export default function HomePage() {
    return (
        <>
            <Head title="Shyam Gupta" />
            <Header />
            <HomeSection />
            <SkillSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
        </>
    );
}
