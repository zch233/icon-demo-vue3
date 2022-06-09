// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';

export interface CiCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CiCircleOutlined: CiCircleOutlinedIconType = (props, context) => <Icon name='CiCircleOutlined' {...{ ...props, ...context.attrs }} icon={CiCircleOutlinedSvg} />;

CiCircleOutlined.displayName = 'CiCircleOutlined';

export default CiCircleOutlined;