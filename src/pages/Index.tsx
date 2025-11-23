import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const players = [
  { name: "EnDay01", kills: 59, deaths: 17, playtime: 23 },
  { name: "Kamelia07", kills: 1, deaths: 31, playtime: 9 },
  { name: "kfcasdw", kills: 4, deaths: 3, playtime: 6 },
  { name: "paata1234", kills: 2, deaths: 11, playtime: 3 },
  { name: "BleW", kills: 18, deaths: 7, playtime: 10 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 pt-8">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary relative pixelated drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              MINEHAD
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 pixelated">
            Статистика игроков сервера
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player, index) => {
            const kd = (player.kills / Math.max(player.deaths, 1)).toFixed(2);
            const isTopPlayer = index === 0;

            return (
              <Card
                key={player.name}
                className="relative overflow-hidden border-4 border-border bg-card hover:scale-105 transition-transform duration-200 pixelated shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                {isTopPlayer && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground border-2 border-black shadow-lg">
                      <Icon name="Crown" size={16} className="mr-1" />
                      TOP
                    </Badge>
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-primary/20 border-4 border-primary flex items-center justify-center pixelated">
                      <Icon name="User" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground pixelated">
                        {player.name}
                      </h3>
                      <p className="text-sm text-muted-foreground pixelated">
                        K/D: {kd}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t-2 border-border pt-4">
                    <div className="flex items-center justify-between bg-muted/50 p-3 border-2 border-border">
                      <div className="flex items-center gap-2">
                        <Icon name="Sword" size={20} className="text-accent" />
                        <span className="text-sm text-foreground pixelated">Убийств</span>
                      </div>
                      <span className="font-bold text-accent text-lg pixelated">
                        {player.kills}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-muted/50 p-3 border-2 border-border">
                      <div className="flex items-center gap-2">
                        <Icon name="Skull" size={20} className="text-destructive" />
                        <span className="text-sm text-foreground pixelated">Смертей</span>
                      </div>
                      <span className="font-bold text-destructive text-lg pixelated">
                        {player.deaths}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-muted/50 p-3 border-2 border-border">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} className="text-secondary" />
                        <span className="text-sm text-foreground pixelated">Время игры</span>
                      </div>
                      <span className="font-bold text-secondary text-lg pixelated">
                        {player.playtime}ч
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <footer className="mt-16 text-center pb-8">
          <div className="inline-block border-4 border-border bg-card p-6 pixelated">
            <p className="text-muted-foreground text-sm">
              Обновлено: {new Date().toLocaleDateString('ru-RU')}
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Онлайн статистика сервера MINEHAD
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
