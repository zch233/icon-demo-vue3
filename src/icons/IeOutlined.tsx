// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';

export interface IeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IeOutlined: IeOutlinedIconType = (props, context) => <Icon name='IeOutlined' {...{ ...props, ...context.attrs }} icon={IeOutlinedSvg} />;

IeOutlined.displayName = 'IeOutlined';

export default IeOutlined;