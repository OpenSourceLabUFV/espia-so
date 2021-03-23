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

local function createFolders(discipline)
    local subFolders = {"implementacoes", "resumos", "roteiros"}
    for i, sub in ipairs(subFolders) do
        createFolder(discipline.name, sub)
    end
end

local function createFile(discName, fileName)
    local path = string.format("../disciplinas/%s/%s.md", discName, fileName)
    print(path)
    local file = io.open(path, "w")

    file:write(Files[fileName])
    file:close()
end

local function createFiles(discipline)
    for i, v in pairs(Files) do
        print(i)
        createFile(discipline.name, i)
    end
end

local function formatName(discipline)
    discipline.name = discipline.name:gsub(' ', ''):lower()

    if (discipline.name:match("%W")) then
        error("O nome da disciplina não pode conter caracteres especiais.")
    end

end

local discipline = {}
io.write("Insira o Nome da Disciplina: ")
discipline.name = io.read("*l")
io.write("Insira o período da disciplina (0 se for optativa): ")
discipline.semester = io.read("*l")

formatName(discipline)
createFolders(discipline)
createFiles(discipline)
