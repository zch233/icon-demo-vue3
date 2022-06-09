// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';

export interface BlockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BlockOutlined: BlockOutlinedIconType = (props, context) => <Icon name='BlockOutlined' {...{ ...props, ...context.attrs }} icon={BlockOutlinedSvg} />;

BlockOutlined.displayName = 'BlockOutlined';

export default BlockOutlined;