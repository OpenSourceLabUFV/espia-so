Files = {}

Files.provas = [[
---
slug: "%s"
title: "Provas"
---
]]

Files.visaoGeral = [[
---
slug: "%s"
title: "Visão Geral"
---
]]

Files.linksUteis = [[
---
slug: %s 
title: "Links Úteis"
---
]]

Files.README = [[
---
slug: "%s"
title: "%s"
periodo: "%s"
---

[Visão Geral](visaoGeral.md)
[Links Úteis](linksUteis.md)
[Provas](provas.md)
]]

local function createFolder(mainName, subName)
    local path = string.format("../disciplinas/%s/%s", mainName, subName)
    os.execute("mkdir -p " .. path)
end

local function createFolders(discipline)
    local subFolders = {"implementacoes", "conteudos"}
    for i, sub in ipairs(subFolders) do
        createFolder(discipline.name, sub)
    end
end

local function createFile(discipline, fileName)
    local path = string.format("/disciplinas/%s/%s", discipline.name, fileName)
    print(path)
    local file = io.open(".." .. path .. ".md", "w")
    if fileName == "README" then
        file:write(Files[fileName]:format(string.format("/disciplinas/%s", discipline.name), discipline.original, discipline.semester))
    else
        file:write(Files[fileName]:format(path))
    end
    file:close()
end

local function createFiles(discipline)
    for i, v in pairs(Files) do
        print(i)
        createFile(discipline, i)
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

discipline.original = discipline.name

formatName(discipline)
createFolders(discipline)
createFiles(discipline)
