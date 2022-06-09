// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/UsergroupDeleteOutlined';

export interface UsergroupDeleteOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUsergroupDeleteOutlined: UsergroupDeleteOutlinedIconType = (props, context) => (
    <Icon name='UsergroupDeleteOutlined' {...{ ...props, ...context.attrs }} icon={UsergroupDeleteOutlinedSvg} />
);

IconUsergroupDeleteOutlined.displayName = 'IconUsergroupDeleteOutlined';

export default IconUsergroupDeleteOutlined;