#Ejemplo con python
class ejemplo:
    def __init__(self, string, warr):
        self.string = string
        self.warr = warr
    def fnsubstring(self, string, warr):    
        res = []
        num = len(warr) 
        ls = len(string)
        if num == 0:
            return res
        str_len = len(warr[0])
        map_str = dict((x,warr.count(x)) for x in set(warr))
        i = 0
        while i + num * str_len - 1 < ls:
            map_str2 = {}
            j = 0
            while j < num:
                subs = string[i + j * str_len:i + j * str_len + str_len ]
                if not subs in map_str:
                    break
                else:
                    map_str2[subs] = map_str2.get(subs, 0) + 1
                    if map_str2[subs]>map_str[subs]:
                        break
                    j = j + 1
            if j == num:
                res.append(i)
            i = i + 1

        return res

str = "barfoothefoobarman"
array = ["bar","foo"]

index = ejemplo(str, array)
print(index.fnsubstring(str, array))

str = "wordgoodgoodgoodbestword"
array = ["word", "good", "best", "word"]

index = ejemplo(str, array)
print(index.fnsubstring(str, array))


str = "barfoofoobarthefoobarman"
array = ["bar", "foo", "the"]

index = ejemplo(str, array)
print(index.fnsubstring(str, array))
