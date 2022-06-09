// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnterOutlinedSvg from '@ant-design/icons-svg/es/asn/EnterOutlined';

export interface EnterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEnterOutlined: EnterOutlinedIconType = (props, context) => (
    <Icon name='EnterOutlined' {...{ ...props, ...context.attrs }} icon={EnterOutlinedSvg} />
);

IconEnterOutlined.displayName = 'IconEnterOutlined';

export default IconEnterOutlined;