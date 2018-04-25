package com.undertakers.blog.like;

import java.util.ArrayList;
import java.util.List;


public class LikeContainer {

    private List<Integer> idList;

    public LikeContainer() {
        idList = new ArrayList<>();
    }

    public LikeContainer(String idString) {
        idList = toList(idString);
    }

    public boolean toggleLike(int userId) {
        if (!idList.contains(userId)) {
            idList.add(userId);
        } else if (idList.contains(userId)) {
            idList.remove(userId);
        }

        return !idList.contains(userId);
    }

    public List<Integer> toList(String s) {
        List<Integer> list = new ArrayList<>();

        String[] strings = s.split(":");
        for (String number: strings) {
            list.add(Integer.parseInt(number));
        }

        return list;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Integer i: idList) {
            sb.append(i);
            sb.append(':');
        }
        return sb.toString();
    }

    public List<Integer> getIdList() {
        return idList;
    }
}
