// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined';

export interface UsergroupAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UsergroupAddOutlined: UsergroupAddOutlinedIconType = (props, context) => <Icon name='UsergroupAddOutlined' {...{ ...props, ...context.attrs }} icon={UsergroupAddOutlinedSvg} />;

UsergroupAddOutlined.displayName = 'UsergroupAddOutlined';

export default UsergroupAddOutlined;