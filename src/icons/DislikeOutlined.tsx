// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';

export interface DislikeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DislikeOutlined: DislikeOutlinedIconType = (props, context) => <Icon name='DislikeOutlined' {...{ ...props, ...context.attrs }} icon={DislikeOutlinedSvg} />;

DislikeOutlined.displayName = 'DislikeOutlined';

export default DislikeOutlined;