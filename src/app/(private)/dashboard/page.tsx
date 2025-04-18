import { nextAuthoptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogOut from "@/components/logout"
import { getServerSession } from "next-auth"
import { Head } from "next/document"

export default async function Dashboard() {

    const session = await getServerSession(nextAuthoptions)



    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">


            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-indigo-600 py-6 px-8 text-center sm:text-left flex justify-between">
                        <div> <h1 className="text-2xl font-bold text-white">Meu Perfil</h1>
                            <p className="mt-1 text-indigo-100">Gerencie suas informações pessoais</p>
                        </div>
                        <div><ButtonLogOut /></div>
                    </div>

                    <div className="p-8 sm:p-10">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <div className="flex-shrink-0">


                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-500">Nome completo</h2>
                                        <p className="mt-1 text-xl font-semibold text-gray-900">{session?.user.name}</p>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-medium text-gray-500">Endereço de email</h2>
                                        <p className="mt-1 text-xl font-semibold text-gray-900 break-all">{session?.user.email}</p>
                                    </div>

                                    <div className="pt-4">
                                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                                            Editar Perfil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 sm:p-10">
                            <h3 className="text-lg font-medium text-gray-900">Mais informações</h3>
                            <p className="mt-2 text-gray-600">
                                Sua conta está verificada e ativa. Você pode atualizar suas informações a qualquer momento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}