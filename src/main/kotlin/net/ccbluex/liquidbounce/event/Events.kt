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
package net.ccbluex.liquidbounce.event

import net.ccbluex.liquidbounce.features.module.Module
import net.ccbluex.liquidbounce.utils.Nameable
import net.minecraft.block.BlockState
import net.minecraft.client.gui.screen.Screen
import net.minecraft.client.util.InputUtil
import net.minecraft.client.util.math.MatrixStack
import net.minecraft.entity.LivingEntity
import net.minecraft.network.Packet
import net.minecraft.util.math.BlockPos
import net.minecraft.util.shape.VoxelShape

// Game events

@Nameable("gameTick")
class GameTickEvent : Event()

@Nameable("entityTick")
class EntityTickEvent : Event()

// Render events

@Nameable("engineRender")
class EngineRenderEvent(val tickDelta: Float) : Event()

@Nameable("flatRender")
class FlatRenderEvent(val matrixStack: MatrixStack, val tickDelta: Float) : Event()

// Input events

@Nameable("inputHandle")
class InputHandleEvent : Event()

@Nameable("key")
class KeyEvent(val key: InputUtil.Key, val action: Int, val mods: Int) : Event()

// User action events

@Nameable("attack")
class AttackEvent(val enemy: LivingEntity) : Event()

@Nameable("session")
class SessionEvent : Event()

@Nameable("screen")
class ScreenEvent(val screen: Screen?) : Event()

@Nameable("chatSend")
class ChatSendEvent(val message: String) : CancellableEvent()

// World events

/**
 * Block Shape hooked at CACTUS_BLOCK, FLUID_BLOCK to reduce performance impact and headache
 */
@Nameable("blockShape")
class BlockShapeEvent(val state: BlockState, val pos: BlockPos, var shape: VoxelShape) : Event()

// Network events

@Nameable("packet")
class PacketEvent(val packet: Packet<*>) : CancellableEvent()

// Client events

@Nameable("clientStart")
class ClientStartEvent : Event()

@Nameable("clientShutdown")
class ClientShutdownEvent : Event()

@Nameable("toggleModule")
class ToggleModuleEvent(val module: Module, val newState: Boolean) : Event()

