import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Code, Database, Globe, Lock, Zap, FileCode, Server, Webhook } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comment ça marche
            </h1>
            <p className="text-lg text-muted-foreground">
              Documentation technique complète pour intégrer le Mur des Fondateurs 
              à votre site web et vos systèmes de don.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Tabs */}
      <section className="page-section">
        <div className="container">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="integration">Intégration</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="content-card">
                  <div className="step-number mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-2">Créez votre mur</h3>
                  <p className="text-muted-foreground">
                    Inscrivez votre ONG en 2 minutes. Personnalisez les couleurs 
                    et le style pour correspondre à votre identité visuelle.
                  </p>
                </div>
                <div className="content-card">
                  <div className="step-number mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-2">Intégrez le widget</h3>
                  <p className="text-muted-foreground">
                    Copiez-collez une ligne de code sur votre site. Le widget 
                    s'adapte automatiquement à votre design.
                  </p>
                </div>
                <div className="content-card">
                  <div className="step-number mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-2">Automatisez</h3>
                  <p className="text-muted-foreground">
                    Connectez votre système de don via webhook. Chaque nouveau 
                    donateur apparaît instantanément sur le mur.
                  </p>
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Architecture technique</h2>
                <div className="content-card">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Server className="w-5 h-5 text-primary" />
                        Infrastructure
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>API REST sécurisée (HTTPS TLS 1.3)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>CDN global pour le widget (latence &lt;50ms)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Base de données répliquée avec backup quotidien</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>SLA 99.9% de disponibilité</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" />
                        Sécurité & Conformité
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Conforme RGPD (données hébergées en UE)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Chiffrement des données au repos (AES-256)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Authentification par clé API avec rotation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Audit logs de toutes les actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Integration Tab */}
            <TabsContent value="integration" className="space-y-8" id="integration">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Intégration du widget</h2>
                <div className="content-card space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <FileCode className="w-5 h-5 text-primary" />
                      Installation simple (recommandé)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Ajoutez cette ligne dans votre HTML là où vous souhaitez afficher le mur :
                    </p>
                    <div className="bg-secondary rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <code className="text-foreground">
                        {`<script src="https://mur.fondateurs.org/widget.js" data-org="VOTRE_ID"></script>`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Installation React/Vue/Angular
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Pour les frameworks modernes, utilisez notre package npm :
                    </p>
                    <div className="bg-secondary rounded-lg p-4 font-mono text-sm overflow-x-auto space-y-2">
                      <div><span className="text-muted-foreground"># Installation</span></div>
                      <code className="text-foreground">npm install @murdesfondateurs/widget</code>
                      <div className="pt-4"><span className="text-muted-foreground"># Utilisation React</span></div>
                      <code className="text-foreground whitespace-pre">{`import { FoundersWall } from '@murdesfondateurs/widget';

<FoundersWall orgId="VOTRE_ID" theme="light" />`}</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Options de personnalisation</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 font-semibold">Paramètre</th>
                            <th className="text-left py-2 font-semibold">Type</th>
                            <th className="text-left py-2 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border">
                            <td className="py-2 font-mono">data-org</td>
                            <td className="py-2">string</td>
                            <td className="py-2">Identifiant unique de votre organisation</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 font-mono">data-theme</td>
                            <td className="py-2">light | dark</td>
                            <td className="py-2">Thème du widget (défaut: light)</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 font-mono">data-color</td>
                            <td className="py-2">hex</td>
                            <td className="py-2">Couleur primaire personnalisée</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 font-mono">data-cols</td>
                            <td className="py-2">number</td>
                            <td className="py-2">Nombre de colonnes (défaut: 10)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* API Tab */}
            <TabsContent value="api" className="space-y-8" id="api">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Documentation API</h2>
                
                <div className="content-card space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-primary" />
                      Base URL
                    </h3>
                    <div className="bg-secondary rounded-lg p-4 font-mono text-sm">
                      <code className="text-foreground">https://api.murdesfondateurs.org/v1</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Authentification</h3>
                    <p className="text-muted-foreground mb-4">
                      Toutes les requêtes API nécessitent un header Authorization :
                    </p>
                    <div className="bg-secondary rounded-lg p-4 font-mono text-sm">
                      <code className="text-foreground">Authorization: Bearer VOTRE_CLE_API</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Endpoints</h3>
                    <div className="space-y-4">
                      {/* GET Founders */}
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">GET</span>
                          <span className="font-mono text-sm">/founders</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Récupère la liste des fondateurs de votre mur
                        </p>
                        <div className="bg-secondary rounded p-3 font-mono text-xs overflow-x-auto">
                          <pre className="text-foreground">{`{
  "data": [
    {
      "id": "f_123",
      "name": "Marie Dupont",
      "position": 1,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "meta": { "total": 42, "limit": 100 }
}`}</pre>
                        </div>
                      </div>

                      {/* POST Founder */}
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">POST</span>
                          <span className="font-mono text-sm">/founders</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Ajoute un nouveau fondateur au mur
                        </p>
                        <div className="bg-secondary rounded p-3 font-mono text-xs overflow-x-auto">
                          <pre className="text-foreground">{`// Request
{
  "name": "Jean Martin",
  "email": "jean@example.com",  // optionnel
  "amount": 50,                  // optionnel
  "message": "Bravo!"            // optionnel
}

// Response 201
{
  "id": "f_124",
  "position": 43,
  "created_at": "2024-01-20T14:00:00Z"
}`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Webhooks Tab */}
            <TabsContent value="webhooks" className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Configuration des Webhooks</h2>
                
                <div className="content-card space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Webhook className="w-5 h-5 text-primary" />
                      Intégrations supportées
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Connectez directement votre système de don pour automatiser l'inscription des fondateurs :
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "Stripe", desc: "Paiements en ligne" },
                        { name: "PayPal", desc: "Donations PayPal" },
                        { name: "HelloAsso", desc: "Plateforme française" },
                        { name: "iRaiser", desc: "Collecte de fonds" },
                        { name: "Zapier", desc: "Automatisation" },
                        { name: "Custom", desc: "Votre propre système" },
                      ].map((item) => (
                        <div key={item.name} className="border border-border rounded-lg p-3">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Format du webhook</h3>
                    <p className="text-muted-foreground mb-4">
                      Envoyez un POST à votre endpoint webhook avec les données suivantes :
                    </p>
                    <div className="bg-secondary rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-foreground">{`POST https://api.murdesfondateurs.org/v1/webhook/VOTRE_SECRET

{
  "event": "donation.completed",
  "donor": {
    "name": "Marie Dupont",
    "email": "marie@example.com"
  },
  "amount": 50,
  "currency": "EUR",
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Sécurité</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Signature HMAC-SHA256 pour vérifier l'authenticité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Retry automatique en cas d'échec (3 tentatives)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Logs de tous les webhooks dans votre dashboard</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}