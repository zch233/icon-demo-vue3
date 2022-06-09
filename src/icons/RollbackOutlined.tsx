// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined';

export interface RollbackOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RollbackOutlined: RollbackOutlinedIconType = (props, context) => <Icon name='RollbackOutlined' {...{ ...props, ...context.attrs }} icon={RollbackOutlinedSvg} />;

RollbackOutlined.displayName = 'RollbackOutlined';

export default RollbackOutlined;