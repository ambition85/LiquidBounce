/*
 * This file is part of LiquidBounce (https://github.com/CCBlueX/LiquidBounce)
 *
 * Copyright (c) 2016 - 2021 CCBlueX
 *
 * LiquidBounce is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LiquidBounce is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with LiquidBounce. If not, see <https://www.gnu.org/licenses/>.
 */
package net.ccbluex.liquidbounce.features.module.modules.combat

import net.ccbluex.liquidbounce.event.PacketReceiveEvent
import net.ccbluex.liquidbounce.features.module.Category
import net.ccbluex.liquidbounce.features.module.Module
import net.minecraft.network.packet.s2c.play.EntityVelocityUpdateS2CPacket
import org.lwjgl.glfw.GLFW

object Velocity : Module("Velocity", Category.COMBAT, bind = GLFW.GLFW_KEY_L) {

    val packetReceiveHandler = sequenceHandler<PacketReceiveEvent> {
        val packet = it.packet

        if (packet is EntityVelocityUpdateS2CPacket && packet.id == mc.player?.entityId) {
            it.cancelEvent()
        }
    }

}
