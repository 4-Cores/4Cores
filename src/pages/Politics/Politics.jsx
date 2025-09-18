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
                                href: '#base',
                                title: t("politicspage.table.base"),
                                children: [
                                    {
                                        key: '10',
                                        href: '#agreement',
                                        title: t("politicspage.table.agreement"),
                                    },
                                    {
                                        key: '11',
                                        href: '#execution',
                                        title: t("politicspage.table.execution"),
                                    },
                                    {
                                        key: '12',
                                        href: '#interest',
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
                                href: '#confidentiality',
                                title: t("politicspage.table.confidentiality"),
                            },
                            {
                                key: '15',
                                href: '#network',
                                title: t("politicspage.table.network"),
                            },
                            {
                                key: '16',
                                href: '#google',
                                title: t("politicspage.table.google"),
                            }, {
                                key: '17',
                                href: '#form',
                                title: t("politicspage.table.form"),
                            },
                            {
                                key: '18',
                                href: '#rights',
                                title: t("politicspage.table.rights"),
                            }, {
                                key: '19',
                                href: '#autority',
                                title: t("politicspage.table.protection"),
                            },


                        ]}
                    />
                </aside>
                <section className="right">
                    <h2 id="identity">{t('politicspage.table.identity')}</h2>
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
                        <h2 id="treatment">{t('politicspage.table.treatment')}</h2>
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
                        <h2 id="finality">{t('politicspage.table.finality')}</h2>
                        <h3 id="request">{t('politicspage.table.request')}</h3>
                        <p>{t('politicspage.finality.sp1')}</p>
                        <p>{t('politicspage.finality.sp2')}</p>
                        <h3 id="upgrade">{t('politicspage.table.upgrade')}</h3>
                        <p>{t('politicspage.finality.sp3')}</p>
                        <h3 id="security">{t('politicspage.table.security')}</h3>
                        <p>{t('politicspage.finality.sp4')}</p>
                        <p>{t('politicspage.finality.sp5')}</p>
                        <p>{t('politicspage.finality.sp6')}</p>
                    </section>
                    <section className="content">
                        <h2 id="base">{t('politicspage.table.base')}</h2>
                        <p>{t('politicspage.base.p1')}</p>
                        <h3 id="agreement">{t('politicspage.table.agreement')}</h3>
                        <p>{t('politicspage.base.p3')}</p>
                        <ul>
                            <li>{t('politicspage.base.sp1')}</li>
                            <li>{t('politicspage.base.sp2')}</li>
                        </ul>
                        <p>{t('politicspage.base.p4')}</p>
                        <h3 id="execution">{t('politicspage.table.execution')}</h3>
                        <p>{t('politicspage.base.p6')}</p>
                        <h3 id="interest">{t('politicspage.table.interest')}</h3>
                        <p>{t('politicspage.base.p8')}</p>
                        <ul>
                            <li>{t('politicspage.base.sp3')}</li>
                            <li>{t('politicspage.base.sp4')}</li>
                        </ul>
                        <h3 id="obligation">{t('politicspage.table.obligation')}</h3>
                        <p>{t('politicspage.base.p10')}</p>
                    </section>
                    <section className="content">
                        <h2 id="confidentiality">{t('politicspage.table.confidentiality')}</h2>
                        <p>{t('politicspage.security.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="network">{t('politicspage.table.network')}</h2>
                        <p>{t('politicspage.network.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="google">{t('politicspage.table.google')}</h2>
                        <p>{t('politicspage.google.p1')}</p>
                    </section>
                    <section className="content">
                        <h2 id="form">{t('politicspage.table.form')}</h2>
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
                        <h2 id="rights">{t('politicspage.table.rights')}</h2>
                        <p>{t('politicspage.rights.p1')}</p>
                        <p>{t('politicspage.rights.p2')}</p>
                        <p>{t('politicspage.rights.p3')}</p>
                    </section>
                    <section className="content">
                        <h2 id="autority">{t('politicspage.table.protection')}</h2>
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