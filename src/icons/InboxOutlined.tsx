// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';

export interface InboxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InboxOutlined: InboxOutlinedIconType = (props, context) => <Icon name='InboxOutlined' {...{ ...props, ...context.attrs }} icon={InboxOutlinedSvg} />;

InboxOutlined.displayName = 'InboxOutlined';

export default InboxOutlined;