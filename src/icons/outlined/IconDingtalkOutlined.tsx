// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/es/asn/DingtalkOutlined';

export interface DingtalkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDingtalkOutlined: DingtalkOutlinedIconType = (props, context) => (
    <Icon name='DingtalkOutlined' {...{ ...props, ...context.attrs }} icon={DingtalkOutlinedSvg} />
);

IconDingtalkOutlined.displayName = 'IconDingtalkOutlined';

export default IconDingtalkOutlined;