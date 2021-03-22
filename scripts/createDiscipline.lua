Files = {}

Files.visaoGeral = [[
---
slug: %s
title: Visão Geral
---
]]

Files.linksUteis = [[
---
slug: %s 
title: Links Úteis
---
]]

local function createFolder(mainName, subName)
    local path = string.format("../disciplinas/%s/%s", mainName, subName)
    os.execute("mkdir -p " .. path)
end

local function createFolders(name)
    local subFolders = {"implementacoes", "resumos", "roteiros"}
    for i, sub in ipairs(subFolders) do
        createFolder(name[1], sub)
    end
end

local function createFile(discName, fileName)
    local path = string.format("../disciplinas/%s/%s.md", discName, fileName)
    print(path)
    local file = io.open(path, "w")

    file:write(Files[fileName])
    file:close()
end

local function createFiles(name)
    for i, v in pairs(Files) do
        print(i)
        createFile(name, i)
    end
end

local function formatName(name)
    name[1] = name[1]:gsub(' ', ''):lower()

    if (name[1]:match("%W")) then
        error("O nome da disciplina não pode conter caracteres especiais.")
    end

end

local discipline = {io.read("*l")}
formatName(discipline)
createFolders(discipline)
createFiles(discipline[1])
