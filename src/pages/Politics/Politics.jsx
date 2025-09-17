import React from 'react';
import { Anchor } from 'antd';
import ScrollTop from "../scripts/ScrollTop";
import {useTranslation} from "react-i18next";
import {t} from "i18next";

export default function Politics() {
    const {t} = useTranslation();

    return (
        <>
            <ScrollTop />
            <section className="Politics-title">
                <h1>{t("politicspage.title")}</h1>
                <p>{t("politicspage.last-update")}</p>
            </section>
            <section className="Politics">
                <aside className="left">
                    <Anchor
                        affix={false}
                        items={[
                            {
                                key: '1',
                                href: '#identity',
                                title: t("politicspage.table.identity"),
                            },
                            {
                                key: '2',
                                href: '#treatment',
                                title: t("politicspage.table.treatment"),
                            },
                            {
                                key: '4',
                                href: '#finality',
                                title: t("politicspage.table.finality"),
                                children: [
                                    {
                                        key: '5',
                                        href: '#request',
                                        title: t("politicspage.table.request"),
                                    },
                                    {
                                        key: '6',
                                        href: '#upgrade',
                                        title: t("politicspage.table.upgrade"),
                                    },
                                    {
                                        key: '7',
                                        href: '#security',
                                        title: t("politicspage.table.security"),
                                    },
                                ],
                            },
                            {
                                key: '9',
                                href: '#legale',
                                title: t("politicspage.table.base"),
                                children: [
                                    {
                                        key: '10',
                                        href: '#consentement',
                                        title: t("politicspage.table.agreement"),
                                    },
                                    {
                                        key: '11',
                                        href: '#execution',
                                        title: t("politicspage.table.execution"),
                                    },
                                    {
                                        key: '12',
                                        href: '#interet',
                                        title: t("politicspage.table.interest"),
                                    },
                                    {
                                        key: '13',
                                        href: '#obligation',
                                        title: t("politicspage.table.obligation"),
                                    },
                                ],
                            },
                            {
                                key: '14',
                                href: '#confidentialite',
                                title: t("politicspage.table.confidentiality"),
                            },
                            {
                                key: '15',
                                href: '#reseaux',
                                title: t("politicspage.table.network"),
                            },
                            {
                                key: '16',
                                href: '#droits',
                                title: t("politicspage.table.rights"),
                            }, {
                                key: '17',
                                href: '#protection',
                                title: t("politicspage.table.protection"),
                            },

                        ]}
                    />
                </aside>
                <section className="right">
                    <h2 id="identite">{t('politicspage.identity.title')}</h2>
                    <section className="content">
                        <p>{t('politicspage.identity.p1')}</p>
                        <ul>
                            <li>{t('politicspage.identity.sp1')}</li>
                            <li>{t('politicspage.identity.sp2')}</li>
                            <li>{t('politicspage.identity.sp3')}</li>
                            <li>{t('politicspage.identity.sp4')}</li>
                        </ul>
                        <p>{t('politicspage.identity.p2')}</p>
                    </section>
                    <section className="content">
                        <h2 id="traitement">{t('politicspage.treatment.title')}</h2>
                        <p>{t('politicspage.treatment.p1')}</p>
                        <br/>
                        <ul>
                            <li>{t('politicspage.treatment.sp1')}</li>
                            <li>{t('politicspage.treatment.sp2')}</li>
                            <li>{t('politicspage.treatment.sp3')}</li>
                            <li>{t('politicspage.treatment.sp4')}</li>
                        </ul>
                        <p>{t('politicspage.treatment.p3')}</p>
                    </section>
                    <section className="content">
                        <h2 id="finalite">{t('politicspage.finality.title')}</h2>
                        <h3 id="demandes">{t('politicspage.finality.p1')}</h3>
                        <p>{t('politicspage.finality.sp1')}</p>
                        <p>{t('politicspage.finality.sp2')}</p>
                        <h3 id="ameliorer">{t('politicspage.finality.p2')}</h3>
                        <p>{t('politicspage.finality.sp3')}</p>
                        <h3 id="securite">{t('politicspage.finality.p3')}</h3>
                        <p>{t('politicspage.finality.sp4')}</p>
                        <p>{t('politicspage.finality.sp5')}</p>
                        <p>{t('politicspage.finality.sp6')}</p>
                    </section>
                    <section className="content">
                        <h2 id="legale">{t('politicspage.base.title')}</h2>
                        <p>{t('politicspage.base.p1')}</p>
                        <h3 id="consentement">{t('politicspage.base.p2')}</h3>
                        <p>{t('politicspage.base.p3')}</p>
                        <ul>
                            <li>{t('politicspage.base.sp1')}</li>
                            <li>{t('politicspage.base.sp2')}</li>
                        </ul>
                        <p>{t('politicspage.base.p4')}</p>
                        <h3 id="execution">{t('politicspage.base.p5')}</h3>
                        <p>{t('politicspage.base.p6')}</p>
                        <h3 id="interet">{t('politicspage.base.p7')}</h3>
                        <p>{t('politicspage.base.p8')}</p>
                        <ul>
                            <li>{t('politicspage.base.sp3')}</li>
                            <li>{t('politicspage.base.sp4')}</li>
                        </ul>
                        <h3 id="obligation">{t('politicspage.base.p9')}</h3>
                        <p>{t('politicspage.base.p10')}</p>
                    </section>
                    <section className="content">
                        <h2 id="confidentialite">{t('politicspage.security.title')}</h2>
                        <p>{t('politicspage.security.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="reseaux">{t('politicspage.network.title')}</h2>
                        <p>{t('politicspage.network.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="droits">{t('politicspage.google.title')}</h2>
                        <p>{t('politicspage.google.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="form">{t('politicspage.form.title')}</h2>
                        <p>{t('politicspage.form.p1')}</p>
                        <p>{t('politicspage.form.p2')}</p>
                        <p>{t('politicspage.form.p3')}</p>
                        <p>{t('politicspage.form.p4')}</p>
                        <li>{t('politicspage.form.sp1')}</li>
                        <li>{t('politicspage.form.sp2')}</li>
                        <li>{t('politicspage.form.sp3')}</li>
                        <p>{t('politicspage.form.p5')}</p>
                    </section>
                    <section className="content">
                        <h2 id="rights">{t('politicspage.rights.title')}</h2>
                        <p>{t('politicspage.rights.p1')}</p>
                        <p>{t('politicspage.rights.p2')}</p>
                        <p>{t('politicspage.rights.p3')}</p>
                    </section>
                    <section className="content">
                        <h2 id="authority">{t('politicspage.autority.title')}</h2>
                        <p>{t('politicspage.autority.p1')}</p>
                        <a href={t('politicspage.autority.a1')}>{t('politicspage.autority.a1')}</a>
                        <br />
                        <a href={t('politicspage.autority.a2')}>{t('politicspage.autority.a2')}</a>
                    </section>
                </section>
            </section>
        </>
    )
};