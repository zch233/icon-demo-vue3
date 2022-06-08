// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined';

export interface SlackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SlackOutlined: SlackOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SlackOutlinedSvg} />;

SlackOutlined.displayName = 'SlackOutlined';

export default SlackOutlined;